import { api } from "../../../shared/api/api";
import { IFeature, IFindPlaceRes } from "../model/types";

export class SearchFormApi {
  public static async getPlaceByName(place: string): Promise<IFeature[]> {
    try {
      const response = await api.get<IFindPlaceRes>(`/geocoding/v5/mapbox.places/${place}.json`);

      return response.data.features;
    } catch (error) {
      return [];
    }
  }
}
