import { CodeBlock } from "@midasit-dev/moaui";/**${comma}*/

const CompCodeBlockJavascript = () => {
	const code = `const txt = {
	"name":"John", 
	"age":30, 
	"city":"New York"
};
const obj = JSON.parse(txt.toString());
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;`;
	return (
		<CodeBlock 
			language="javascript"
			title="javascript Code Block"
		>
			{code}
		</CodeBlock>
	);
}/**${comma}*/

export default CompCodeBlockJavascript;


