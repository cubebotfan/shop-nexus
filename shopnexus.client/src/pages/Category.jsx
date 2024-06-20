import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CategoryCard from '../components/CategoryCard';

function Category() {
    const navigate = useNavigate();

    const { categoryId } = useParams();
    const [categoryDetails, setCategoryDetails] = useState(null);
    const [categoryTree, setCategoryTree] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const apiLink = 'https://localhost:7182/api';

        axios({
            url: `${apiLink}/categories/${categoryId}`,
            method: "GET"
        }).then(res => {
            setCategoryDetails(res.data);
            axios({
                url: `${apiLink}/categories/${categoryId}/parent-tree`,
                method: "GET"
            }).then(res => {
                setCategoryTree(res.data.reverse());
            }).catch(error => {

            })
            axios({
                url: `${apiLink}/categories/${categoryId}/products`,
                method: "GET"
            }).then(res => {
                setProducts(res.data);
            }).catch(error => {

            })
            axios({
                url: `${apiLink}/categories/${categoryId}/sub-categories`,
                method: "GET"
            }).then(res => {
                setSubCategories(res.data);
            }).catch(error => {

            })
        }).catch(error => {
            /*navigate('.../');*/
        })
    }, []);
    return (
        <main className="category-page">
            <div className="breadcrumb">
                {categoryTree.map((category, i, a) => {
                    return (<a href={`/categories/${category.categoryId}`} key={category.categoryId}>{category.name}{(i+1 < a.length) ? " /" : ""}</a>)
                })}
            </div>
            {(categoryDetails) ?
            <div className="container">
                    <h2> Subcategories in "{categoryDetails.name}"</h2>
                    <div className="product-list">
                        {subCategories.map(c => {
                            return (
                                <CategoryCard key={c.categoryId} name={c.name} categoryId={ c.categoryId} imgSrc={c.imageURL} />
                            )
                        })}
                    </div>
                    <h2> Products in "{categoryDetails.name}"</h2>
                    <div className="product-list">
                        {products.map(p => {
                            return (
                                <ProductCard key={p.productId} name={p.name} price={p.price.toFixed(2)} imgSrc={p.imageURL} />
                            )
                        })}
                    </div>
            </div>: ""}
        </main>
    )
}

export default Category;