const fs = require('fs');

export function cli(args) {
  if (args[2]) {
    const files = args.slice(2);
    
    files.forEach(file => {
      fs.writeFile(file, '', (err) => {
        if (err) throw err;
        console.log(`File ${file} created.`);
      });
    });

  } else {
    console.log("Please add a file");
  }
}