import { SPFetchClient } from "@pnp/nodejs";
import { sp } from "@pnp/sp/presets/all";

export const ConfigSP = () => {
    sp.setup({
        sp: {
            fetchClientFactory: () => {
                return new SPFetchClient(
                    "https://devfvg.sharepoint.com/sites/conny",
                    "502b2dc5-c0e8-4112-a223-239ff320d322",
                    "+oF4XcFgTmsnML/SrpwUd/YMJuhYxCeirHP+xHScU4w="
                )
            },
        },
    });
}