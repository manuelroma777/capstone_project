from flask import Flask, jsonify, request
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
import mysql.connector


app = Flask(__name__) # Inicializa la app Flask
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) # Habilita CORS solo para el origen específico del frontend (React en localhost:3000)

bcrypt = Bcrypt(app)
app.config['JWT_SECRET_KEY'] = 'tu_clave_secreta'  # Cambia esto por una clave secreta fuerte
jwt = JWTManager(app)

# Configura la conexión con MySQL
db = mysql.connector.connect(
    host="localhost",  # Cambia esto si tu base de datos está alojada en otro lugar
    user="root",  # Tu usuario de MySQL
    password="26872687",  # Tu contraseña de MySQL
    database="shopnow"  # Nombre de la base de datos
)

# Ruta de prueba para asegurarte de que Flask está funcionando
@app.route('/')
def home():
    return "Backend funcionando correctamente."

# Ruta para registrar un usuario
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    # Obtener los datos del usuario incluyendo los nuevos campos
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('email')
    password = data.get('password')
    calle = data.get('calle')
    ciudad = data.get('ciudad')
    comunidad = data.get('comunidad')
    codigo_postal = data.get('codigoPostal')
    pais = data.get('pais')
    movil = data.get('movil')

    # Encriptar la contraseña
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    cursor = db.cursor()
    # Incluir los nuevos campos en la consulta SQL
    sql = """
        INSERT INTO users (first_name, last_name, email, password, calle, ciudad, comunidad, codigo_postal, pais, movil)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    values = (first_name, last_name, email, hashed_password, calle, ciudad, comunidad, codigo_postal, pais, movil)
    cursor.execute(sql, values)
    db.commit()
    cursor.close()

    return jsonify({"message": "Usuario registrado correctamente"}), 201

# @app.route('/register', methods=['POST'])
# def register():
#     data = request.get_json()
#     # username = data.get('username')  # Asegúrate de obtener el 'username'
#     first_name = data.get('firstName')
#     last_name = data.get('lastName')
#     email = data.get('email')
#     password = data.get('password')

#     # Encriptar la contraseña
#     hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

#     cursor = db.cursor()
#     sql = "INSERT INTO users (first_name, last_name, email, password) VALUES (%s, %s, %s, %s)"
#     values = (first_name, last_name, email, hashed_password)
#     cursor.execute(sql, values)
#     db.commit()
#     cursor.close()

#     return jsonify({"message": "Usuario registrado correctamente"}), 201


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')  # Cambiado de 'username' a 'email'
    password = data.get('password')

    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()
    cursor.close()

    # Verificar si el usuario existe y si la contraseña es correcta
    if not user or not bcrypt.check_password_hash(user['password'], password):
        return jsonify({"message": "Credenciales inválidas"}), 401

    # Generar un token JWT
    access_token = create_access_token(identity=user['id'])

    # Devolver el token y el nombre del usuario
    return jsonify({"token": access_token, "firstName": user['first_name']}), 200


# Ruta protegida: Solo usuarios autenticados pueden acceder
@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    return jsonify({"message": f"Acceso autorizado para el usuario {current_user_id}"}), 200


# Ruta para obtener un producto específico por su ID (CRUD - Read)
@app.route('/products/<int:id>', methods=['GET'])
def get_product(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM products WHERE id = %s", (id,))
    product = cursor.fetchone()
    cursor.close()

    if product:
        return jsonify(product)
    else:
        return jsonify({"error": "Producto no encontrado"}), 404

# Ruta para obtener productos (CRUD - Read)
@app.route('/products', methods=['GET'])
def get_products():
    cursor = db.cursor(dictionary=True)
    # Incluir el campo image_url en la consulta
    cursor.execute("SELECT id, name, price, description, stock, image_url FROM products")
    products = cursor.fetchall()
    cursor.close()
    return jsonify(products)

# Ruta para Actualizar productos (CRUD - Update)
@app.route('/update_product/<int:id>', methods=['PUT'])
def update_product(id):
    data = request.get_json()
    name = data.get('name')
    price = data.get('price')
    description = data.get('description')
    stock = data.get('stock')

    cursor = db.cursor()
    sql = "UPDATE products SET name=%s, price=%s, description=%s, stock=%s WHERE id=%s"
    values = (name, price, description, stock, id)

    cursor.execute(sql, values)
    db.commit()
    cursor.close()

    return jsonify({"message": "Producto actualizado correctamente"}), 200

# Ruta para Eliminar productos (CRUD - Delete)
@app.route('/delete_product/<int:id>', methods=['DELETE'])
def delete_product(id):
    cursor = db.cursor()
    sql = "DELETE FROM products WHERE id=%s"
    cursor.execute(sql, (id,))
    db.commit()
    cursor.close()

    return jsonify({"message": "Producto eliminado correctamente"}), 200

# Agregar producto
@app.route('/add_product', methods=['POST'])
def add_product():
    data = request.get_json()
    name = data.get('name')
    price = data.get('price')
    description = data.get('description')
    stock = data.get('stock')

    cursor = db.cursor()
    sql = "INSERT INTO products (name, price, description, stock) VALUES (%s, %s, %s, %s)"
    values = (name, price, description, stock)
    
    cursor.execute(sql, values)
    db.commit()

    # Obtener el ID del producto recién insertado
    product_id = cursor.lastrowid

    # Crear un objeto de producto para devolver
    new_product = {
        "id": product_id,
        "name": name,
        "price": price,
        "description": description,
        "stock": stock
    }
    
    cursor.close()

    return jsonify({"message": "Producto agregado correctamente", "product": new_product}), 201

# Inicia el servidor
if __name__ == '__main__':
    app.run(debug=True)