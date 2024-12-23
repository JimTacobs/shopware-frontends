import type { Customer } from "../../checkout/customer/Customer";
import type { CustomFields } from "../../common/CustomField";
import type { Language } from "../../framework/language/Language";
import type { LocaleTranslation } from "./LocaleTranslation";

/**
 * @public
 */
export type Locale = {
  code: string;
  name: string | null;
  territory: string | null;
  translations: LocaleTranslation[] | null;
  translated: LocaleTranslation[] | null;
  users: Customer[] | null;
  languages: Language[] | null;
  id: string;
  customFields: CustomFields | null;
  apiAlias: "locale";
  createdAt: Date | string;
  updatedAt: Date | string | null;
};
