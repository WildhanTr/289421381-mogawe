import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DrawerService {
  onDrawerChanged: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor() {
    const drawer = {
      isOpen: false,
      activeMenu: ''
    };

    this.onDrawerChanged.next(drawer);
  }

  /**
   * Update
   * @param drawer
   */
  update(drawer) {
    this.onDrawerChanged.next(drawer);
  }
}
