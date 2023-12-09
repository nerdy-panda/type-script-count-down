import Application from "./Application.js";
import { default as NerdDateContract } from "../../Contracts/Services/NerdDate.js";
import NerdDate from "../../Services/NerdDate.js";

const nerdDate : NerdDateContract = new NerdDate ;

const app = new Application(nerdDate);
app.main();
