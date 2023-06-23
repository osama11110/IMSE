const DUMMY_DATA_CUSTOMER = [
    
        {
          "CUSTOMER_NAME": "John Doe",
          "CUSTOMER_EMAIL": "john.doe@example.com",
          "CUSTOMER_CITY": "New York",
          "CUSTOMER_ADDRESS": "123 Main St",
          "CUSTOMER_PHONE_NO": "555-1234",
          "CUSTOMER_PASSWORD": "password123"
        },
        {
          "CUSTOMER_NAME": "Jane Smith",
          "CUSTOMER_EMAIL": "jane.smith@example.com",
          "CUSTOMER_CITY": "Los Angeles",
          "CUSTOMER_ADDRESS": "456 Elm St",
          "CUSTOMER_PHONE_NO": "555-5678",
          "CUSTOMER_PASSWORD": "abc123"
        },
        {
          "CUSTOMER_NAME": "Michael Johnson",
          "CUSTOMER_EMAIL": "michael.johnson@example.com",
          "CUSTOMER_CITY": "Chicago",
          "CUSTOMER_ADDRESS": "789 Oak Ave",
          "CUSTOMER_PHONE_NO": "555-9012",
          "CUSTOMER_PASSWORD": "pass456"
        },
        {
          "CUSTOMER_NAME": "Emily Davis",
          "CUSTOMER_EMAIL": "emily.davis@example.com",
          "CUSTOMER_CITY": "San Francisco",
          "CUSTOMER_ADDRESS": "987 Pine St",
          "CUSTOMER_PHONE_NO": "555-3456",
          "CUSTOMER_PASSWORD": "hello789"
        },
        {
          "CUSTOMER_NAME": "David Wilson",
          "CUSTOMER_EMAIL": "david.wilson@example.com",
          "CUSTOMER_CITY": "Houston",
          "CUSTOMER_ADDRESS": "654 Elm St",
          "CUSTOMER_PHONE_NO": "555-7890",
          "CUSTOMER_PASSWORD": "testpass"
        },
        {
          "CUSTOMER_NAME": "Sophia Martinez",
          "CUSTOMER_EMAIL": "sophia.martinez@example.com",
          "CUSTOMER_CITY": "Miami",
          "CUSTOMER_ADDRESS": "321 Palm Ave",
          "CUSTOMER_PHONE_NO": "555-2345",
          "CUSTOMER_PASSWORD": "pass1234"
        },
        {
          "CUSTOMER_NAME": "Daniel Anderson",
          "CUSTOMER_EMAIL": "daniel.anderson@example.com",
          "CUSTOMER_CITY": "Dallas",
          "CUSTOMER_ADDRESS": "852 Oak St",
          "CUSTOMER_PHONE_NO": "555-6789",
          "CUSTOMER_PASSWORD": "abcxyz"
        },
        {
          "CUSTOMER_NAME": "Olivia Thomas",
          "CUSTOMER_EMAIL": "olivia.thomas@example.com",
          "CUSTOMER_CITY": "Seattle",
          "CUSTOMER_ADDRESS": "741 Pine St",
          "CUSTOMER_PHONE_NO": "555-1234",
          "CUSTOMER_PASSWORD": "qwerty"
        },
        {
          "CUSTOMER_NAME": "William Taylor",
          "CUSTOMER_EMAIL": "william.taylor@example.com",
          "CUSTOMER_CITY": "Boston",
          "CUSTOMER_ADDRESS": "369 Maple Ave",
          "CUSTOMER_PHONE_NO": "555-5678",
          "CUSTOMER_PASSWORD": "pass789"
        },
        {
          "CUSTOMER_NAME": "Ava Hernandez",
          "CUSTOMER_EMAIL": "ava.hernandez@example.com",
          "CUSTOMER_CITY": "Phoenix",
          "CUSTOMER_ADDRESS": "963 Oak St",
          "CUSTOMER_PHONE_NO": "555-9012",
          "CUSTOMER_PASSWORD": "password"
        }
      
      
];

const DUMMY_DATA_SELLER = [
    {
      "SELLER_NAME": "ABC Electronics",
      "SELLER_EMAIL": "abc@example.com",
      "SELLER_CITY": "New York",
      "SELLER_ADDRESS": "123 Main St",
      "SELLER_PHONE_NO": "555-1234",
      "SELLER_PASSWORD": "password123"
    },
    {
      "SELLER_NAME": "XYZ Appliances",
      "SELLER_EMAIL": "xyz@example.com",
      "SELLER_CITY": "Los Angeles",
      "SELLER_ADDRESS": "456 Elm St",
      "SELLER_PHONE_NO": "555-5678",
      "SELLER_PASSWORD": "abc123"
    },
    {
      "SELLER_NAME": "123 Electronics",
      "SELLER_EMAIL": "123@example.com",
      "SELLER_CITY": "Chicago",
      "SELLER_ADDRESS": "789 Oak Ave",
      "SELLER_PHONE_NO": "555-9012",
      "SELLER_PASSWORD": "pass456"
    },
    {
      "SELLER_NAME": "Gadget World",
      "SELLER_EMAIL": "gadget@example.com",
      "SELLER_CITY": "San Francisco",
      "SELLER_ADDRESS": "987 Pine St",
      "SELLER_PHONE_NO": "555-3456",
      "SELLER_PASSWORD": "hello789"
    },
    {
      "SELLER_NAME": "Tech Solutions",
      "SELLER_EMAIL": "tech@example.com",
      "SELLER_CITY": "Houston",
      "SELLER_ADDRESS": "654 Elm St",
      "SELLER_PHONE_NO": "555-7890",
      "SELLER_PASSWORD": "testpass"
    },
    {
      "SELLER_NAME": "ElectroMart",
      "SELLER_EMAIL": "electro@example.com",
      "SELLER_CITY": "Miami",
      "SELLER_ADDRESS": "321 Palm Ave",
      "SELLER_PHONE_NO": "555-2345",
      "SELLER_PASSWORD": "pass1234"
    },
    {
      "SELLER_NAME": "Gizmo Express",
      "SELLER_EMAIL": "gizmo@example.com",
      "SELLER_CITY": "Dallas",
      "SELLER_ADDRESS": "852 Oak St",
      "SELLER_PHONE_NO": "555-6789",
      "SELLER_PASSWORD": "abcxyz"
    },
    {
      "SELLER_NAME": "Innovative Gadgets",
      "SELLER_EMAIL": "innovative@example.com",
      "SELLER_CITY": "Seattle",
      "SELLER_ADDRESS": "741 Pine St",
      "SELLER_PHONE_NO": "555-1234",
      "SELLER_PASSWORD": "qwerty"
    },
    {
      "SELLER_NAME": "Tech Hub",
      "SELLER_EMAIL": "techhub@example.com",
      "SELLER_CITY": "Boston",
      "SELLER_ADDRESS": "369 Maple Ave",
      "SELLER_PHONE_NO": "555-5678",
      "SELLER_PASSWORD": "pass789"
    },
    {
      "SELLER_NAME": "Electro World",
      "SELLER_EMAIL": "electroworld@example.com",
      "SELLER_CITY": "Phoenix",
      "SELLER_ADDRESS": "963 Oak St",
      "SELLER_PHONE_NO": "555-9012",
      "SELLER_PASSWORD": "password"
    }
  ];
  

  const DUMMY_DATA_PRODUCT = [
    {
      "PRODUCT_NAME": "Smartphone",
      "PRODUCT_PRICE": 500,
      "PRODUCT_COLOR": "Black",
      "PRODUCT_SELLER_ID": 1
    },
    {
      "PRODUCT_NAME": "Laptop",
      "PRODUCT_PRICE": 1000,
      "PRODUCT_COLOR": "Silver",
      "PRODUCT_SELLER_ID": 2
    },
    {
      "PRODUCT_NAME": "Headphones",
      "PRODUCT_PRICE": 50,
      "PRODUCT_COLOR": "Red",
      "PRODUCT_SELLER_ID": 3
    },
    {
      "PRODUCT_NAME": "Smartwatch",
      "PRODUCT_PRICE": 150,
      "PRODUCT_COLOR": "Blue",
      "PRODUCT_SELLER_ID": 1
    },
    {
      "PRODUCT_NAME": "Camera",
      "PRODUCT_PRICE": 800,
      "PRODUCT_COLOR": "Black",
      "PRODUCT_SELLER_ID": 4
    },
    {
      "PRODUCT_NAME": "Tablet",
      "PRODUCT_PRICE": 300,
      "PRODUCT_COLOR": "White",
      "PRODUCT_SELLER_ID": 2
    },
    {
      "PRODUCT_NAME": "Speakers",
      "PRODUCT_PRICE": 80,
      "PRODUCT_COLOR": "Black",
      "PRODUCT_SELLER_ID": 3
    },
    {
      "PRODUCT_NAME": "Television",
      "PRODUCT_PRICE": 1200,
      "PRODUCT_COLOR": "Silver",
      "PRODUCT_SELLER_ID": 4
    },
    {
      "PRODUCT_NAME": "Printer",
      "PRODUCT_PRICE": 200,
      "PRODUCT_COLOR": "White",
      "PRODUCT_SELLER_ID": 2
    },
    {
      "PRODUCT_NAME": "Gaming Console",
      "PRODUCT_PRICE": 400,
      "PRODUCT_COLOR": "Black",
      "PRODUCT_SELLER_ID": 1
    }
  ];

  const DUMMY_DATA_ORDER = [
    {
      "ORDER_CUSTOMER_ID": 1,
      "ORDER_ADDRESS": "123 Main St",
      "ORDER_PMETHOD": "Credit Card",
      "ORDER_PRODUCT_ID": 1
    },
    {
      "ORDER_CUSTOMER_ID": 2,
      "ORDER_ADDRESS": "456 Elm St",
      "ORDER_PMETHOD": "PayPal",
      "ORDER_PRODUCT_ID": 2
    },
    {
      "ORDER_CUSTOMER_ID": 3,
      "ORDER_ADDRESS": "789 Oak Ave",
      "ORDER_PMETHOD": "Cash",
      "ORDER_PRODUCT_ID": 3
    },
    {
      "ORDER_CUSTOMER_ID": 4,
      "ORDER_ADDRESS": "321 Pine St",
      "ORDER_PMETHOD": "Credit Card",
      "ORDER_PRODUCT_ID": 4
    },
    {
      "ORDER_CUSTOMER_ID": 5,
      "ORDER_ADDRESS": "654 Maple Ave",
      "ORDER_PMETHOD": "PayPal",
      "ORDER_PRODUCT_ID": 5
    },
    {
      "ORDER_CUSTOMER_ID": 6,
      "ORDER_ADDRESS": "987 Oak St",
      "ORDER_PMETHOD": "Cash",
      "ORDER_PRODUCT_ID": 6
    },
    {
      "ORDER_CUSTOMER_ID": 7,
      "ORDER_ADDRESS": "741 Pine St",
      "ORDER_PMETHOD": "Credit Card",
      "ORDER_PRODUCT_ID": 7
    },
    {
      "ORDER_CUSTOMER_ID": 8,
      "ORDER_ADDRESS": "852 Elm St",
      "ORDER_PMETHOD": "PayPal",
      "ORDER_PRODUCT_ID": 8
    },
    {
      "ORDER_CUSTOMER_ID": 9,
      "ORDER_ADDRESS": "963 Oak Ave",
      "ORDER_PMETHOD": "Cash",
      "ORDER_PRODUCT_ID": 9
    },
    {
      "ORDER_CUSTOMER_ID": 10,
      "ORDER_ADDRESS": "369 Maple St",
      "ORDER_PMETHOD": "Credit Card",
      "ORDER_PRODUCT_ID": 10
    }
  ];

  const DUMMY_DATA_INVOICE = [
    {
      "INVOICE_PRICE": 500,
      "INVOICE_TITLE": "Smartphone",
      "INVOICE_ORDER_ID": 1
    },
    {
      "INVOICE_PRICE": 1000,
      "INVOICE_TITLE": "Laptop",
      "INVOICE_ORDER_ID": 2
    },
    {
      "INVOICE_PRICE": 50,
      "INVOICE_TITLE": "Headphones",
      "INVOICE_ORDER_ID": 3
    },
    {
      "INVOICE_PRICE": 150,
      "INVOICE_TITLE": "Smartwatch",
      "INVOICE_ORDER_ID": 4
    },
    {
      "INVOICE_PRICE": 800,
      "INVOICE_TITLE": "Camera",
      "INVOICE_ORDER_ID": 5
    },
    {
      "INVOICE_PRICE": 300,
      "INVOICE_TITLE": "Tablet",
      "INVOICE_ORDER_ID": 6
    },
    {
      "INVOICE_PRICE": 80,
      "INVOICE_TITLE": "Speakers",
      "INVOICE_ORDER_ID": 7
    },
    {
      "INVOICE_PRICE": 1200,
      "INVOICE_TITLE": "Television",
      "INVOICE_ORDER_ID": 8
    },
    {
      "INVOICE_PRICE": 200,
      "INVOICE_TITLE": "printer",
      "INVOICE_ORDER_ID": 9
    },
    {
      "INVOICE_PRICE": 400,
      "INVOICE_TITLE": "Gaming Console",
      "INVOICE_ORDER_ID": 10
    }
  ];
  

  module.exports = {
    DUMMY_DATA_CUSTOMER,
    DUMMY_DATA_SELLER,
    DUMMY_DATA_PRODUCT,
    DUMMY_DATA_ORDER,
    DUMMY_DATA_INVOICE,
  };
  
  
  

