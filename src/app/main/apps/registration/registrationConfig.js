import SupplierForm from "./SupplierForm";
import ServiceProviderForm from "./ServiceProviderForm";

const RegistrationConfig = [
    {
        path: '/register_supplier',
        component: SupplierForm,
    },
    {
        path: '/register_service_provider',
        component: ServiceProviderForm,
    },
]


export default RegistrationConfig;