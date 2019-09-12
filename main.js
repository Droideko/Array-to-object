const initialArray = [
   { id: 1, name: "item one", tags: ["music", "sport", "science"] },
   { id: 2, name: "item two", tags: ["music"] },
   { id: 3, name: "item three", tags: ["fun"] },
   { id: 4, name: "item four", tags: ["sport", "science"] },
   { id: 5, name: "item five", tags: [] },
   { id: 6, name: "item six", tags: ["sport"] },
   { id: 7, name: "item seven", tags: [] },
];
const obj = {};
const getTags = arr => {
   arr.forEach(item => {
      const tags = item['tags'];
      if (tags.length == 0) {
         obj['Without tag'] = obj['Without tag'] || [];
         obj['Without tag'].push(item);
      }
      tags.forEach(tag => {
         obj[tag] = obj[tag] || [];
         obj[tag].push(item);
      });
   });
}
getTags(initialArray);
console.log(obj);