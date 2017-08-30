/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
/* import json files as modules */
declare module "*.json" {
    const value: any;
    export default value;
}
