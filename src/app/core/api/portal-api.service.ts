import { Observable } from "rxjs";
import { BaseApi } from "./base-api.service";
import { ICategory } from "../models/category";
import { IMovie } from "../models/movie";

export class PortalApi extends BaseApi {
    private _apiUrl = 'http://localhost:55653/api';

    getCategory(): Observable<ICategory[]> {
        return this.get<ICategory[]>(`${this._apiUrl}/dashboard/category`);
    }

    getMovies(): Observable<IMovie[]> {
        return this.get<IMovie[]>(`${this._apiUrl}/dashboard/movies`);
    }

    createCategory(data: ICategory): Observable<ICategory> {
        return this.post<ICategory>(`${this._apiUrl}/dashboard`, data);
    }

    updateCategory(id: number, data: ICategory): Observable<ICategory> {
        return this.put<ICategory>(`${this._apiUrl}/dashboard/${id}`, data);
    }
}