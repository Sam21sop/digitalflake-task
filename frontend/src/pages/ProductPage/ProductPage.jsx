import React, {useState} from 'react';
import DataTable from 'react-data-table-component';
import ProductDetail from '../../components/product/productDetail/ProductDetail';
import ProductForm from '../../components/product/productForm/ProductForm';

const ProductPage = () => {

    const [addProductIsOpened, setAddProductIsOpened] = useState(false);

    const addNewProductHandler = () => {

    };

    const columns = [

        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => row.image,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => row.action,
            cell: () => <>
                <button onClick={handleButtonClick}>Update</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={handleButtonClick}>Delete</button>
            </>,
            button: true,
        },
    ];

    const data = [
        {
            id: 123,
            category: 'Mobile',
            image: "image url",
            status: "active",
            action: [

            ]
        },
        {
            id: 234,
            category: 'cloth',
            image: "image url",
            status: "Inactive",
            action: "button"
        },
    ];


    const handleButtonClick = () => {
        console.log('clicked');
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "row", padding: "20px" }}>
                <div style={{ display: "flex", gap: "15px" }}>
                    <img src="https://cdn-icons-png.flaticon.com/128/3405/3405828.png" alt="icon" width={40} height={40} />
                    <span style={{ fontSize: "25px" }}>Product</span>
                    <input type="text" />
                </div>

                <div onClick={addNewProductHandler}>
                    <button style={{ padding: "10px", backgroundColor: "purple", color: 'white', borderRadius: "5px", cursor: "pointer" }}>Add New</button>
                </div>
            </div>


            <div style={{ width: "89%", marginLeft: "5%", marginTop: "5%" }}>
                <DataTable
                    columns={columns}
                    data={data}

                />
            </div>


            {
                addProductIsOpened &&
                <div style={{ marginLeft: "30%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", position: "absolute" }}>
                    <h3 className="" >Add New Product</h3>
                    <ProductForm
                        product={product}
                        productImage={productImage}
                        imagePreview={imagePreview}
                        description={description}
                        setDescription={setDescription}
                        handleInputChange={handleInputChange}
                        handleImageChange={handleImageChange}
                        saveProduct={saveProduct}
                    />
                </div>
            }
        </>
    )
}

export default ProductPage;

