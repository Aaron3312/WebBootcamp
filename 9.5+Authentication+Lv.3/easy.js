import { loadFlow } from "@flyde/runtime";

const execute = await loadFlow("./ded.flyde");

const inputs = { celsius: 0 }; // "celcius" is a main input in the flow, therefore it must be provided when executing the flow
const { result } = execute(inputs); // execute returns a "result" promise, along with a cleanup function that can be used to cancel the execution.

const { fahrenheit } = await result; // each output in the flow is a property on the result object

console.log(result.fahrenheit); // 32


