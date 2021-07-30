import React, { useEffect, useState } from "react";
import CauroselGroups from "../../../features/grouping";
import SearchPanel from "../components/wrapper"
import { fetchAllServices } from '../../../store/services/servicesAction';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ServiceSearch() {

  const dispatch = useDispatch();
  const { regSlug, businessSlug, sectorId, categorySlug } = useParams();
  const { businesss } = useSelector(state => state.businesses);
  const { serviceCategories } = useSelector(state => state.serviceCategories);
  const { sectors } = useSelector(state => state.sectors);
  const [business, setBusiness] = useState()
  const [serviceCategory, setServiceCategory] = useState()
  const [sector, setSector] = useState()

  useEffect(() => {
    dispatch(fetchAllServices());
	}, [dispatch]);

  useEffect(() => {
    setBusiness(businesss && businesss.filter(bt => bt.slug === businessSlug)[0])
    setServiceCategory(serviceCategories && serviceCategories.filter(pc => pc.slug === categorySlug)[0])
    setSector(sectors && sectors.filter(s => s.id === sectorId)[0])
	}, [businesss, serviceCategories, sectors, regSlug, businessSlug, sectorId, categorySlug]);

  if (!business) {
    return <h2>...</h2>
  }

  return (
    <div>
      <CauroselGroups heading={"General search"}/>
      <SearchPanel business={business} serviceCategory={serviceCategory} sector={sector} />
    </div>
  );
}
