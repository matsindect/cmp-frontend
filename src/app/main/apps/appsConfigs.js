import RegistrationConfig from "./registration/registrationConfig";
import SuppliersConfig from "./suppliers/SuppliersConfig";

const appsConfigs = [
	...SuppliersConfig,
	...RegistrationConfig,
];

export default appsConfigs;