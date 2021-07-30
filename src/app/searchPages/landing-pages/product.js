import React, { useEffect, useState } from "react";
import CauroselGroups from "../../../features/grouping";
import SearchPanel from "../components/wrapper"
import { fetchAllProducts } from '../../../store/products/productsAction';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductSearch() {

  const dispatch = useDispatch();
  const { regSlug, businessSlug, sectorId, categorySlug } = useParams();
  const { businesss } = useSelector(state => state.businesses);
  const { productCategories } = useSelector(state => state.productCategories);
  const { sectors } = useSelector(state => state.sectors);
  const [business, setBusiness] = useState()
  const [productCategory, setProductCategory] = useState()
  const [sector, setSector] = useState()

  useEffect(() => {
    dispatch(fetchAllProducts());
	}, [dispatch]);

  useEffect(() => {
    setBusiness(businesss && businesss.filter(bt => bt.slug === businessSlug)[0])
    setProductCategory(productCategories && productCategories.filter(pc => pc.slug === categorySlug)[0])
    setSector(sectors && sectors.filter(s => s.id === sectorId)[0])
	}, [businesss, productCategories, sectors, regSlug, businessSlug, sectorId, categorySlug]);

  return (
    <div>
      <CauroselGroups heading={"General search"}/>
      <SearchPanel business={business} productCategory={productCategory} sector={sector} />
    </div>
  );
}
