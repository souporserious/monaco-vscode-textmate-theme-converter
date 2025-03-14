#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var index_1 = require("./index");
var fs = require("fs-extra");
var path = require("path");
commander_1.program
    .version("0.1.6")
    .requiredOption('-i, --input <inputPath>', 'Specify a file or a folder')
    .option('-o, --output <outputPath>', 'Specify an output path');
commander_1.program.parse(process.argv);
var options = commander_1.program.opts();
if (options.input) {
    var input = options.input;
    var exists = fs.existsSync(input);
    if (!exists)
        throw Error('The input path does not exists');
    var stats = fs.statSync(input);
    var isDirectory = stats.isDirectory();
    if (isDirectory) {
        index_1.convertThemeFromDir(input, options.output || '.mvttc/converted');
    }
    else {
        index_1.convertThemeFromFilePath(input, options.output || ".mvttc/converted/" + path.basename(input));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnB4LXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ucHgtc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFvQztBQUNwQyxpQ0FBc0U7QUFDdEUsNkJBQStCO0FBQy9CLDJCQUE2QjtBQUU3QixtQkFBTztLQUNKLE9BQU8sQ0FBQyxPQUFPLENBQUM7S0FDaEIsY0FBYyxDQUFDLHlCQUF5QixFQUFFLDRCQUE0QixDQUFDO0tBQ3ZFLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0FBRWpFLG1CQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixJQUFNLE9BQU8sR0FBRyxtQkFBTyxDQUFDLElBQUksRUFBbUMsQ0FBQztBQUVoRSxJQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUM7SUFDTixJQUFBLHFCQUFLLENBQVk7SUFFeEIsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxJQUFHLENBQUMsTUFBTTtRQUFFLE1BQU0sS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFFMUQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsSUFBRyxXQUFXLEVBQUM7UUFDWCwyQkFBbUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxDQUFDO0tBQ3BFO1NBQUs7UUFDRixnQ0FBd0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxzQkFBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUcsQ0FBQyxDQUFDO0tBQ2pHO0NBQ0oifQ==