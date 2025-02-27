# Hacia la clase en vivo

---

## Desafío

Seguimos con nuestro cliente IbeiZon el cual, como ya sabemos, está más que satisfecho con nuestro desempeño.
En esta ocasión, nos solicita seguir trabajando con la misma base de datos, pero ahora sumando otra tabla: la de marcas. Pero tranquilos… para ella ya tenemos el modelo listo y se llama Brand.
Lo que van a necesitar ahora es que dentro del modelo de productos (product.js) asociemos la relación necesaria para luego poder consultar los productos en conjunto de sus marcas. La relación debe llamarse: brand (OJO: todo en minúsculas).
Recordemos que la estructura de las tablas es así:


#### Tabla productos: 

- id

- nombre

- descripcion

- precio

- marca_id


#### Tabla marcas: 

- id

- nombre


Con lo anterior podemos definir que “un producto pertenece a una marca” y que “una marca tiene muchos productos”.
Nuestra misión será entonces completar el siguiente código dentro del controlador:

```javascript
'use strict';

module.exports = (sequelize, DataTypes) => {
const product = sequelize.define('Product', 
  {
    nombre: DataTypes.STRING(200),
    descripcion: DataTypes.TEXT,
    precio: DataTypes.DECIMAL,
 	}, 
  {
    timestamps: false,
    tableName: 'productos',
 	}
);

	product.associate = models => {
  	  product.belongsTo(models.Brand,{
            as:         'brand',
            foreignKey: 'marca_id',
        })
  }

 	return product;
};

```
---

Ahora, nuestra misión será crear una relación opuesta, la de N a 1. Pues, una marca tiene muchos productos.
Teniendo en cuenta que el modelo de marcas (brand.js) ya está creado, deberemos completar dentro del mismo la relación que permita consultar todos los productos que pertenecen a una determinada marca.
Nos solicitan que la relación se llame: products.
Completemos entonces el siguiente archivo:

```javascript
'use strict';

module.exports = (sequelize, DataTypes) => {
  	const brand = sequelize.define('Brand', {
     	nombre: DataTypes.STRING(),
  	}, {
          timestamps: false,
          tableName: 'marcas',
 	});
 
 
  	brand.associate = models => {
     	brand.hasMany(models.Product,{
            as:         'products',
            foreignKey: 'brand_id',
        })
  	}
 
  	return brand;
};

```
---
Vaya! Esto suena a una relación de muchos a muchos, ¿no?
Exactamente, así es. Ahora, la base de datos sumó una nueva tabla: colores. Pero el modelo también ya nos lo dan hecho y se llama Color.
Nuestra misión será, dentro del modelo de productos (product.js), crear una relación adicional que permita consultar los colores que tiene asignado un producto. La relación debe llamarse colors (atención a las minúsculas).
Algo muy importante: como las relaciones de N a M usan una tabla intermedia, lo más seguro es que	necesitaremos el nombre de ella. En este caso, dicha tabla se llama colores_productos.
Completemos el siguiente código:

```javascript
'use strict';
 
module.exports = (sequelize, DataTypes) => {

const product = sequelize.define('Product', 
  {
     nombre: DataTypes.STRING(200),
     descripcion: DataTypes.TEXT,
     precio: DataTypes.DECIMAL,
 	},
  {
          timestamps: false,
          tableName: 'productos',
 	}
);

product.associate = models => {
  product.belongsTo(models.Brand, {
    as: 'brand',
    foreignKey: 'marca_id'
  }),

  product.belongsToMany(models.Color,{
      as:         'colors',
      through:    'colores_productos',
      foreignKey: 'colors_id',
      otherKey:   'products_id',
      timestamps:  false,
  });
};

return product;
};
```
---

Con todo lo anterior, solamente nos queda generar la consulta dentro del controlador para poder ver la marca de un producto y sus colores.
Dentro del controlador (productController.js), completemos la sencilla línea que está haciendo falta.

```javascript
const db = require('../database/models');
 
const controller = {
  index: (req, res) => {
     db.Product
        .findAll({	
	      include: [
            'brand',
            'colors'
            ]
   })
        .then(productos => {
           res.send(productos);
        })
        .catch(err => {
           res.send(err)
        })
  }
}
 
module.exports = controller;
```
---