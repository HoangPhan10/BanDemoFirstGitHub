const users = [
  {
    id: 1,
    email: "kasiba32@gmail.com",
    password: "123456",
    fullName: {
      firstName: "Phan",
      lastName: "Hoang",
      displayName: "Phan Văn Hoàng",
    },
    addresses: [
      {
        id: 1,
        name: "Phan Hoang",
        phone: "033914241",
        addressHome: "Xuân yên - Nghi xuân - Hà tĩnh",
      },
      {
        id: 2,
        name: "Phanng",
        phone: "033914241",
        addressHome: "Xuân yên - Nghi xuân - Hà tĩnh",
      },
    ],
    order: [
      {
        id: 1,
        price: "1200000",
        nameProduct: "Giay",
        status: "Đang xử lý",
        code: "#554",
        quantity: 2,
        total: 2400000,
        day: "21/11/2021",
      },
      {
        id: 2,
        price: "800000",
        nameProduct: "ao",
        status: "Đang xử lý",
        code: "#534",
        quantity: 1,
        total: 800000,
        day: "25/11/2021",
      },
    ],
    cart: [
      {
        namePrd: "Chuck Taylor Classic",
        price: "1,250,000",
      },
    ],
  },
  {
    id: 2,
    email: "phanhoang2002@gmail.com",
    password: "1234567",
    fullName: {
      firstName: "",
      lastName: "",
      displayName: "",
    },
    addresses: [],
    order: [],
    cart: [],
  },
];

export { users };
