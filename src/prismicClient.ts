import * as prismic from "@prismicio/client";
import { apiEndpoint } from "../sm.json";

export const client = prismic.createClient(apiEndpoint);
