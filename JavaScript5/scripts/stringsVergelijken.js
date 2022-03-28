const setup = () => {
   let string1 = 'hallo';
   let string2 = "allo";
   let string3 = "heyhallo ik ben Henk de Tenk"

    console.log(`hey${string1}`==`heyh${string2}`);
    console.log(`hey${string1}`===`heyh${string2}`);
    console.log(string3.slice(0,8)==`hey${string1}`);
    console.log(string3.slice(0,8)===`hey${string1}`);
    console.log(string3.slice(0,8)=="hey"+"hallo");
    console.log(string3.slice(0,8)==="hey"+"hallo");
}
window.addEventListener("load", setup);