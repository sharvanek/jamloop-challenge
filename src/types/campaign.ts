import { z } from "zod";
import { targetGeographySchema } from "@/types/target-geography";
import { targetDemographySchema } from "@/types/target-demography";
import { V } from "@/utils/validation";

export enum CampaignPublishers {
  HULU = "Hulu",
  DISCOVERY = "Discovery",
  ABC = "ABC",
  "A&E" = "A&E",
  TLC = "TLC",
  FOX_NEWS = "Fox News",
  FOX_SPORTS = "Fox Sports",
}

export enum CampaignDevices {
  CTV = "CTV",
  WEB = "Web Browser",
  MOBILE = "Mobile Device",
}

const campaignDateRefine = <T extends { startDate: Date; endDate: Date }>(
  schema: z.ZodType<T>,
) =>
  schema.refine((data) => data.endDate > data.startDate, {
    message: "End date must be on or after start date.",
    path: ["endDate"],
  });

const createCampaignObjectSchema = z.object({
  name: V.string("Name"),
  budget: V.string("Budget").regex(/[0-9]*/),
  startDate: z.date(),
  endDate: z.date(),
  publishers: V.array(
    "Publishers",
    V.nativeEnum("Publishers", CampaignPublishers),
  ),
  demographic: targetDemographySchema,
  geography: targetGeographySchema,
  devices: V.array("Devices", V.nativeEnum("Publishers", CampaignDevices)),
});

export const createCampaignFormSchema = campaignDateRefine(
  createCampaignObjectSchema,
);

export type CreateCampaignRequest = z.infer<typeof createCampaignFormSchema>;

export const updateCampaignFormSchema = campaignDateRefine(
  createCampaignObjectSchema.extend({
    id: V.string("Id"),
  }),
);

export type UpdateCampaignRequest = z.infer<typeof updateCampaignFormSchema>;
