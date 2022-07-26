/**
 * @package CrepeSR
 * @author Crepe-Inc
 * @license AGPL-3.0
 */
import Interface from "./commands/Interface";
import HttpServer from "./http/HttpServer";
import Logger from "./util/Logger";
const c = new Logger("CrepeSR");

c.log(`Starting CrepeSR...`);
Interface.start();
const http = new HttpServer();