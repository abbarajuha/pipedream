import digitalOceanApp from "../../digital_ocean.app.mjs";

export default {
  key: "digital_ocean-create-domain",
  name: "Create a new domain record",
  description: "Create a new domain record",
  version: "0.0.1",
  type: "action",
  props: {
    digitalOceanApp: digitalOceanApp,
    name: {
      label: "Name",
      type: "string",
      description: "The name of the domain itself. This should follow the standard domain format of domain.TLD. For instance, example.com is a valid domain name.",
    },
    ip_address: {
      label: "Ip address",
      type: "string",
      description: "This optional attribute may contain an IP address. When provided, an A record will be automatically created pointing to the apex domain.",
    },
  },
  async run({ $ }) {
    const api = this.digitalOceanApp.digitalOceanWrapper();
    var newDomainData = {
      name: this.name,
      ip_address: this.ip_address,
    };
    $.export("newDomainData", newDomainData);
    return await api.domains.create(newDomainData);
  },
};