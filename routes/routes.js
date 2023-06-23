const express = require("express");
const router = express.Router();
const mySqlConnection = require("../connection/mysql-connection");
const mongoDbConnection = require("../connection/mongodb-connection");
const {
  DUMMY_DATA_CUSTOMER,
  DUMMY_DATA_SELLER,
  DUMMY_DATA_PRODUCT,
  DUMMY_DATA_ORDER,
  DUMMY_DATA_INVOICE,
} = require("../data/dummy-data");
const API_ENDPOINTS = require("../settings/api-endpoints");
const DATABASE_QUERIES = require("../settings/settings");




/**
 * API Endpoint for authenticating a customer
 * @param {customerEmail, customerPassword}
 */

router.post(API_ENDPOINTS.AUTHENTICATE_CUSTOMER, (req, res) => {
  const customerEmail = req.body.customeremail;
  const customerPassword = req.body.customerpassword;
  console.log(customerEmail);
  // const { customerEmail, customerPassword } = req.body;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.AUTHENTICATE_CUSTOMER,
        [customerEmail, customerPassword],
        (err, results) => {
          if (!err) {
            console.log(results)
            results.length === 0 ? res.sendStatus(401): res.json(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});


/**
 * API Endpoint for authenticating a seller
 * @param {sellerEmail, sellerPassword}
 */

router.post(API_ENDPOINTS.AUTHENTICATE_SELLER, (req, res) => {
  console.log(req.body)
  const sellerEmail = req.body.selleremail;
  const sellerPassword = req.body.sellerpassword;
  console.log(sellerEmail);
  // const { customerEmail, customerPassword } = req.body;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.AUTHENTICATE_SELLER,
        [sellerEmail, sellerPassword],
        (err, results) => {
          if (!err) {
            console.log(results)
            results.length === 0 ? res.sendStatus(401): res.json(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for registering a new customer
 * @param {customerName, customerEmail, customerCity, customerAddress, customerPhone, customerPassword}
 */

router.post(API_ENDPOINTS.CUSTOMER, (req, res) => {
  console.log(req.body)
    customerName = req.body.customername;
    customerEmail = req.body.customeremail;
    customerCity = req.body.customercity;
    customerAddress = req.body.customeraddress;
    customerPhone = req.body.customerphone;
    customerPassword = req.body.customerpassword;
    // const { customerName, customerEmail, customerCity, customerAddress, customerPhone, customerPassword } = req.body;
  
    mySqlConnection.connect((err) => {
      if (!err) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_CUSTOMER,
          [customerName, customerEmail, customerCity, customerAddress, customerPhone, customerPassword],
          (err, results) => {
            if (!err) {                  
              res.json("success");
            } else {
              throw new Error(err);
            }
          }
        );
      } else {
        throw new Error(err);
      }
    });
  });

  /**
 * API Endpoint for registering a new seller
 * @param {sellerName, sellerEmail, sellerCity, sellerAddress, sellerPhone, sellerPassword}
 */

router.post(API_ENDPOINTS.SELLER, (req, res) => {
    console.log(req.body)
    const sellerName = req.body.sellername;
    const sellerEmail = req.body.selleremail;
    const sellerCity = req.body.sellercity;
    const sellerAddress = req.body.selleraddress;
    const sellerPhone = req.body.sellerphone;
    const sellerPassword = req.body.sellerpassword;
    // const { sellerName, sellerEmail, sellerCity, sellerAddress, sellerPhone, sellerPassword } = req.body;
    console.log(sellerAddress);
    mySqlConnection.connect((err) => {
      if (!err) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_SELLER,
          [sellerName, sellerEmail, sellerCity, sellerAddress, sellerPhone, sellerPassword],
          (err, results) => {
            if (!err) {                  
              res.json("success");
            } else {
              throw new Error(err);
            }
          }
        );
      } else {
        throw new Error(err);
      }
    });
  });

  /**
 * API Endpoint for searching a customer by email
 * @param {searchId}
 */

router.get(API_ENDPOINTS.SEARCH_CUSTOMER, (req, res) => {
  const searchId = req.query.searchId;
  console.log(searchId)
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.SEARCH_CUSTOMER,
        [searchId],
        (err, results) => {
          if (!err) {
            res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

 /**
 * API Endpoint for searching a customer by email
 * @param {searchId}
 */

 router.get(API_ENDPOINTS.SEARCH_SELLER, (req, res) => {
  const searchId = req.query.searchId;
  console.log(searchId)
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.SEARCH_SELLER,
        [searchId],
        (err, results) => {
          if (!err) {
            res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});


/**
 * API Endpoint for inserting product data
 * @param {productName, productPrice, productColor, productSellerId}
 */

router.post(API_ENDPOINTS.ADD_PRODUCT, (req, res) => {
  console.log(req.body);
  const productName = req.body.productname;
  const productPrice = req.body.productprice;
  const productColor = req.body.productcolor;
  const productSellerId = req.body.sellerid;
    // const { productName, productPrice, productColor } = req.body;

  mySqlConnection.connect((err) => {

    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.ADD_PRODUCT,
        [productName, productPrice, productColor,productSellerId],
        (err, results) => {
          if (!err) {
            res.json("success");
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for updating a customer
 * @param {customerId, customerName, customerEmail, customerCity, customerAddress, customerPhone, customerPassword}
 */

router.put(API_ENDPOINTS.UPDATE_CUSTOMER, (req, res) => {
  console.log(req.body);
   customerId = req.body.customerid;
   customerName = req.body.customername;
   customerEmail = req.body.customeremail;
   customerCity = req.body.customercity;
   customerAddress = req.body.customeraddress;
   customerPhone = req.body.customerphone;
   customerPassword = req.body.customerpassword;
  // const { customerId, customerName, customerEmail, customerCity, customerAddress, customerPhone, customerPassword } = req.body;
  console.log(customerId);
  console.log(customerName);
  console.log(customerEmail);
  console.log(customerCity);
  console.log(customerAddress);
  console.log(customerPhone);
  console.log(customerPassword);


  mySqlConnection.connect((err) => {
    if (!err) {
      console.log(customerId)
      mySqlConnection.query(
        DATABASE_QUERIES.UPDATE_CUSTOMER,
        [customerName, customerEmail, customerCity, customerAddress, customerPhone, customerPassword, customerId,],
        (err, results) => {
          if (!err) {
            console.log(res)
            res.json(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});


  module.exports = router;


/**
 * API Endpoint for updating a seller
 * @param {sellerId, sellerName, sellerEmail, sellerCity, sellerAddress, sellerPhone, sellerPassword}
 */

router.put(API_ENDPOINTS.UPDATE_SELLER, (req, res) => {
  console.log(req.body);
   sellerId = req.body.sellerid;
   sellerName = req.body.sellername;
   sellerEmail = req.body.selleremail;
   sellerCity = req.body.sellercity;
   sellerAddress = req.body.selleraddress;
   sellerPhone = req.body.sellerphone;
   sellerPassword = req.body.sellerpassword;
  // const { customerId, customerName, customerEmail, customerCity, customerAddress, customerPhone, customerPassword } = req.body;
  console.log(sellerId);
  console.log(sellerName);
  console.log(sellerEmail);
  console.log(sellerCity);
  console.log(sellerAddress);
  console.log(sellerPhone);
  console.log(sellerPassword);


  mySqlConnection.connect((err) => {
    if (!err) {
      console.log(sellerId)
      mySqlConnection.query(
        DATABASE_QUERIES.UPDATE_SELLER,
        [sellerName, sellerEmail, sellerCity, sellerAddress, sellerPhone, sellerPassword, sellerId],
        (err, results) => {
          if (!err) {
            console.log(res)
            res.json(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for getting all the products
 * @param {}
 */

router.get(API_ENDPOINTS.PRODUCTS, (req, res) => {
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.PRODUCTS,
        (err, results) => {
          if (!err) {
            res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for inserting order data
 * @param {orderCustomerId, orderAddress, orderPmethod, orderProductId}
 */

router.post(API_ENDPOINTS.ADD_ORDER, (req, res) => {
  console.log(req.body);
  const orderCustomerId = req.body.ordercustomerid;
  const orderAddress = req.body.orderaddress;
  const orderPmethod = req.body.orderpmethod;
  const orderProductId = req.body.productid;
    // const { productName, productPrice, productColor } = req.body;

  mySqlConnection.connect((err) => {

    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.ADD_ORDER,
        [orderCustomerId, orderAddress, orderPmethod, orderProductId],
        (err, results) => {
          if (!err) {
            console.log(results)
            res.json(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});


/**
 * API Endpoint for inserting invoice data
 * @param {invoicePrice, invoiceTitle, invoiceOrderId}
 */

router.post(API_ENDPOINTS.ADD_INVOICE, (req, res) => {
  console.log(req.body);
  const invoicePrice = req.body.invoiceprice;
  const invoiceTitle = req.body.invoicetitle;
  const invoiceOrderId = req.body.invoiceorderid;
    // const { productName, productPrice, productColor } = req.body;

  mySqlConnection.connect((err) => {

    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.ADD_INVOICE,
        [invoicePrice, invoiceTitle, invoiceOrderId],
        (err, results) => {
          if (!err) {
            res.json("success");
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for getting invoice
 * @param {invoicePrice, invoiceTitle, invoiceOrderId}
 */

router.get(API_ENDPOINTS.LIST_INVOICE, (req, res) => {
  console.log(req);
  const searchId = req.query.searchId;
 

  mySqlConnection.connect((err) => {

    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.LIST_INVOICE,
        [searchId],
        (err, results) => {
          if (!err) {
            console.log(results)
            res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for getting products 
 * @param {invoicePrice, invoiceTitle, invoiceOrderId}
 */

router.get(API_ENDPOINTS.LIST_PRODUCT, (req, res) => {
  console.log(req);
  const searchId = req.query.searchId;
 

  mySqlConnection.connect((err) => {

    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.LIST_PRODUCT,
        [searchId],
        (err, results) => {
          if (!err) {
            console.log(results)
            res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});


/**
 * API Endpoint for report 1 
 * @param {}
 */

router.get(API_ENDPOINTS.SOLD_PRODUCT, (req, res) => {
  console.log(req);
  // const searchId = req.query.searchId;
 

  mySqlConnection.connect((err) => {

    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.SOLD_PRODUCT,
        // [searchId],
        (err, results) => {
          if (!err) {
            console.log(results)
            res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for report 2
 * @param {}
 */

router.get(API_ENDPOINTS.LOYAL_CUSTOMER, (req, res) => {
  console.log(req);
  // const searchId = req.query.searchId;
 

  mySqlConnection.connect((err) => {

    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.LOYAL_CUSTOMER,
        // [searchId],
        (err, results) => {
          if (!err) {
            console.log(results)
            res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint to flush all the rows of the tables
 * @param {}
 */

router.get(API_ENDPOINTS.FLUSH, (req, res) => {
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(DATABASE_QUERIES.FLUSH_DATA, (err, results) => {
        if (!err) {
          res.json("success");
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error(err);
    }
  });
});


/**
 * API Endpoint for inserting the dummy data in all the tables
 * @param {}
 */

router.post(API_ENDPOINTS.DUMMY_DATA, async (req, res) => {
  await insertCustomerData();
  await insertSellerData();
  await insertProductData();
  await insertOrderData();
  await insertInvoiceData(res);
});

const insertCustomerData = async () => {
  mySqlConnection.connect((err) => {
    if (!err) {
      for (let i = 0; i < DUMMY_DATA_CUSTOMER.length; i++) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_CUSTOMER,
          [
            DUMMY_DATA_CUSTOMER[i].CUSTOMER_NAME,
            DUMMY_DATA_CUSTOMER[i].CUSTOMER_EMAIL,
            DUMMY_DATA_CUSTOMER[i].CUSTOMER_CITY,
            DUMMY_DATA_CUSTOMER[i].CUSTOMER_ADDRESS,
            DUMMY_DATA_CUSTOMER[i].CUSTOMER_PHONE_NO,
            DUMMY_DATA_CUSTOMER[i].CUSTOMER_PASSWORD,


          ],
          (err, results) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    } else {
      throw new Error(err);
    }
  });
};

const insertSellerData = async () => {
  mySqlConnection.connect((err) => {
    if (!err) {
      for (let i = 0; i < DUMMY_DATA_SELLER.length; i++) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_SELLER,
          [
            DUMMY_DATA_SELLER[i].SELLER_NAME,
            DUMMY_DATA_SELLER[i].SELLER_EMAIL,
            DUMMY_DATA_SELLER[i].SELLER_CITY,
            DUMMY_DATA_SELLER[i].SELLER_ADDRESS,
            DUMMY_DATA_SELLER[i].SELLER_PHONE_NO,
            DUMMY_DATA_SELLER[i].SELLER_PASSWORD,


          ],
          (err, results) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    } else {
      throw new Error(err);
    }
  });
};



const insertProductData = async () => {
  mySqlConnection.connect((err) => {
    if (!err) {
      for (let i = 0; i < DUMMY_DATA_INVOICE.length; i++) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_PRODUCT,
          [
            DUMMY_DATA_PRODUCT[i].PRODUCT_NAME,
            DUMMY_DATA_PRODUCT[i].PRODUCT_PRICE,
            DUMMY_DATA_PRODUCT[i].PRODUCT_COLOR,
            DUMMY_DATA_PRODUCT[i].PRODUCT_SELLER_ID,

          ],
          (err, results) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    } else {
      throw new Error(err);
    }
  });
};

const insertOrderData = async () => {
  mySqlConnection.connect((err) => {
    if (!err) {
      for (let i = 0; i < DUMMY_DATA_ORDER.length; i++) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_ORDER,
          [
            DUMMY_DATA_ORDER[i].ORDER_CUSTOMER_ID,
            DUMMY_DATA_ORDER[i].ORDER_ADDRESS,
            DUMMY_DATA_ORDER[i].ORDER_PMETHOD,
            DUMMY_DATA_ORDER[i].ORDER_PRODUCT_ID,
          ],
          (err, results) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    } else {
      throw new Error(err);
    }
  });
};

const insertInvoiceData = async (res) => {
  mySqlConnection.connect((err) => {
    if (!err) {
      for (let i = 0; i < DUMMY_DATA_INVOICE.length; i++) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_INVOICE,
          [
            DUMMY_DATA_INVOICE[i].INVOICE_PRICE,
            DUMMY_DATA_INVOICE[i].INVOICE_TITLE,
            DUMMY_DATA_INVOICE[i].INVOICE_ORDER_ID,
          ],
          (err, results) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
      res.json("success");
    } else {
      throw new Error(err);
    }
  });
};

/**
 * API Endpoint for migrating data to mongodb
 * @param {}
 */

router.get(API_ENDPOINTS.MIGRATE, (req, res) => {
  let tables = [];
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query("SHOW TABLES IN SHOP", (error, results, fields) => {
        if (error) throw error;

        results.forEach((row) => {
          tables.push(Object.values(row)[0]);
        });

        tables.forEach((table) => {
          mySqlConnection.query(
            `SELECT * FROM SHOP.${table}`,
            (error, results, fields) => {
              if (error) throw error;
              console.log(results)
              mongoDbConnection.connect((err, client) => {
                console.log("here in mongo");
                if (err) throw err;
                const db = mongoDbConnection.db("test");
                db.collection(table).insertMany(results, (error, res) => {
                  console.log(`Data Migrated`, res);
                  mongoDbConnection.close();
                });
              });
            }
          );
        });
      });
    } else {
      throw new Error(err);
    }
  });
  res.json("success");
});





  module.exports = router;
