export function Component1() {
    return (
        <div>
            <h1>This is Component 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>This is a paragraph.</p>
            <a href="https://example.com">This is a link</a>
            <img src="https://via.placeholder.com/100" alt="Placeholder" />
            <ul>
                <li>Unordered list item 11</li>
                <li>Unordered list item 2</li>
            </ul>
            <ol>
                <li>Ordered list item 1</li>
                <li>Ordered list item 2</li>
            </ol>
            <table>
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                    </tr>
                </tbody>
            </table>
            <form>
                <label htmlFor="input1">Text Input:</label>
                <input id="input1" type="text" />
                <br />
                <label htmlFor="checkbox1">Checkbox:</label>
                <input id="checkbox1" type="checkbox" />
                <br />
                <label htmlFor="radio1">Radio:</label>
                <input id="radio1" type="radio" name="radioGroup" />
                <br />
                <label htmlFor="select1">Select:</label>
                <select id="select1">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                </select>
                <br />
                <button type="submit">Submit</button>
            </form>
            <hr />
            <pre>Preformatted text</pre>
            <code>Inline code</code>
            <blockquote>This is a blockquote.</blockquote>
        </div>
    );
}