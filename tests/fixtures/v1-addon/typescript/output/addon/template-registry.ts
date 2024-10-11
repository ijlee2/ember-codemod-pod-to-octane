import type NavigationMenuComponent from './components/navigation-menu/component';
import type UiPageComponent from './components/ui/page/component';

export default interface MyV1AddonRegistry {
  NavigationMenu: typeof NavigationMenuComponent;
  'Ui::Page': typeof UiPageComponent;
  'navigation-menu': typeof NavigationMenuComponent;
  'ui/page': typeof UiPageComponent;
}
