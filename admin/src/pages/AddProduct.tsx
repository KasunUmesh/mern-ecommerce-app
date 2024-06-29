/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../components/layout/navbar";
import { Pen, Trash2 } from "lucide-react";
import upload_area from "../assets/upload_area.svg"
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";


interface Data {
  id: number;
  name: string;
  image: string;
  category: string;
  new_price: string;
  old_price: string;
}


export default function AddProduct() {
  const [image, setImage] = useState<File | null>(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "clothing",
    new_price: "",
    old_price: "",
  });
  const [allProducts, setAllProducts] = useState<Data[]>([]);

  const changeHandle = (e: any) => {
    setProductDetails({...productDetails, [e.target.name]: e.target.value})
  }

  const imagehandler = (e: any) => {
      setImage(e.target.files[0]);
  };

  

  const add_product = async () => {
    let responseData;
    const product = productDetails;

    const formData = new FormData();
    formData.append('product', image);

    try {
      const uploadResponse = await axios.post('http://localhost:4000/upload', formData, {
        headers: {
          Accept: 'application/json',
        }
      });

      responseData = uploadResponse.data;

      if (responseData.success) {
        product.image = responseData.image_url;
        console.log(product);

        const addProductResponse = await axios.post('http://localhost:4000/addproduct', product, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        });

        const addProductData = addProductResponse.data;
        if (addProductData.success) {
          alert("Product added successfully");
          await fetchInfo();
        } else {
          alert("Something went wrong");
        }
      }
    } catch (error) {
      console.error('Error adding product', error);
      alert("Something went wrong");
    }
  }

  const fetchInfo = async () => {
    await axios.get('http://localhost:4000/allproducts').then(Response => {
      setAllProducts(Response.data);
    }).catch(error => {
      alert(error);
    })
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id: any) => {
    try {
      await axios.delete('http://localhost:4000/removeproduct', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          id: id
        }
      });

      await fetchInfo();

    } catch (error) {
      console.log('Error removing product', error);
      
    }
  }


  return (
    <div className="bg-[#F5F8FE] h-screen w-full">
      <div className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[15px]">
        <div className="h-full">
          <Navbar title="Products" />

          <div className="pt-5s mx-auto mb-auto  p-2 md:pr-2">
            <div>
              <div className="mt-6 gap-5 md:grid-cols-2 !z-5 rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 shadow-sm">
                <div className="p-5 flex gap-5 justify-center">
                  <div>
                    <h4 className="block mb-1 text-sm text-gray-500 font-medium">
                      Product Title
                    </h4>
                    <input
                      value={productDetails.name}
                      onChange={changeHandle}
                      type="text"
                      name="name"
                      placeholder="Enter Title"
                      className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-purple-500 block w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className="w-96">
                    <h4 className="block mb-1 text-sm text-gray-500 font-medium">
                      Price
                    </h4>
                    <input
                      value={productDetails.old_price}
                      onChange={changeHandle}
                      type="text"
                      name="old_price"
                      placeholder="Enter Price"
                      className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-purple-500 block w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className="w-96">
                    <h4 className="block mb-1 text-sm text-gray-500 font-medium">
                      Offer Price
                    </h4>
                    <input
                      value={productDetails.new_price}
                      onChange={changeHandle}
                      type="text"
                      name="new_price"
                      placeholder="Enter Offer Price"
                      className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-purple-500 block w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className="w-72">
                    <h4 className="block mb-1 text-sm font-medium text-gray-500">
                      Product Category
                    </h4>
                    <select
                      value={productDetails.category}
                      onChange={changeHandle}
                      name="category"
                      id=""
                      className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                    >
                      <option value="clothing">Clothing</option>
                      <option value="cosmetics">Cosmetics</option>
                      <option value="electronics">Electronics</option>
                    </select>
                  </div>
                  <div className="">
                    <label htmlFor="file-input">
                      <img
                        src={image ? URL.createObjectURL(image) : upload_area}
                        alt=""
                        className="w-20 rounded-sm inline-block"
                      />
                    </label>
                    <input
                      onChange={imagehandler}
                      type="file"
                      name="image"
                      id="file-input"
                      hidden
                      className="bg-[#f8f7f4] max-w-80 w-full py-3 px-4"
                    />
                  </div>
                </div>
                <div className="pb-5 flex justify-end pr-36">
                  <button
                    onClick={() => add_product()}
                    type="button"
                    className="inline-block rounded bg-purple-700 px-12 pb-3 pt-3 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-purple-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-purple-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-purple-950 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="mt-7 gap-5 md:grid-cols-2 !z-5 rounded-sm bg-white bg-clip-border shadow-3xl shadow-shadow-500 shadow-sm">
                <div className="relative max-h-[60vh] overflow-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-blue-100">
                    <thead className="text-xs text-white uppercase bg-indigo-500 text-center">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          PRODUCTS
                        </th>
                        <th scope="col" className="px-6 py-3">
                          TITLE
                        </th>
                        <th scope="col" className="px-6 py-3">
                          OLD PRICE
                        </th>
                        <th scope="col" className="px-6 py-3">
                          NEW PRICE
                        </th>
                        <th scope="col" className="px-6 py-3">
                          CATEGORY
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allProducts.map((product, i) => (
                        <tr
                          key={i}
                          className=" border-b border-indigo-200 hover:bg-indigo-100 text-black text-center text-base"
                        >
                          <td className="px-6 py-4 flex justify-center">
                            <img src={product.image} alt="" width={55} height={55}/>
                          </td>
                          <td>
                            <div className="line-clamp-3">{product.name}</div>
                          </td>
                          <td>${product.old_price}.00</td>
                          <td>${product.new_price}.00</td>
                          <td>{product.category}</td>
                          <td className="px-6 py-4">
                            {/* <button
                              className={
                                "bg-green-600 text-white p-1 rounded-full mx-2 hover:bg-green-700 hover:scale-[110%] transition duration-300 ease-out"
                              }
                            >
                              <Pen className="p-1" />
                            </button> */}
                            <button
                              onClick={() => removeProduct(product.id)}
                              className={
                                "bg-red-600 text-white p-1 rounded-full mx-2 hover:bg-red-700 hover:scale-[110%] transition duration-300 ease-out"
                              }
                            >
                              <Trash2 className="p-1" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
