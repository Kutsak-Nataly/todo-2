// специфичные методы для работы с категориями (которые не входят в обычный CRUD)
import {Category} from '../../../model/Category';
import {CommonDAO} from './CommonDAO';
import {Observable} from 'rxjs';

export interface CategoryDAO extends CommonDAO<Category> {

  // поиск категорий по названию
  search(title: string): Observable<Category[]>;

}
