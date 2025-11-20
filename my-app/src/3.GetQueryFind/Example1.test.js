import { render,screen } from "@testing-library/react";
import { Example1 } from "./Example1";
import user from "@testing-library/user-event";


test("Example1 Test",async()=>{
    render(<Example1/>);
    const ul=screen.getByRole("list");
    const lis=screen.getAllByRole("listitem");
    const listItems=screen.queryAllByRole("listitem");
    console.log(listItems.length);
    expect(listItems.length).toBe(3);
});