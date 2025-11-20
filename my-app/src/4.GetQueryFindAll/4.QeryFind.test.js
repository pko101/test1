import { render,screen } from "@testing-library/react";
import { Example1 } from "../3.GetQueryFind/Example1";


test("GetQueryFind Test",async()=>{
    render(<Example1/>);
    const ul=screen.getAllByRole("list");
    console.log(ul.length);
    const lis=screen.getAllByRole("listitem");
    console.log(lis.length);
    const liss=screen.queryAllByRole("textbox");
    console.log(liss.length);

});