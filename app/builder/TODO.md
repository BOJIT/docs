# Builder

This Vite plugin should:

1 - process the config file
2 - set theme ENV variables

for each code root

1 - read a file to work out what files to include/exclude
2 - convert doxygen to XML (only on build)
3 - convert xml to markdown (moxygen)

endfor

build the docs site to a static directory


ideally, in the provided Docker image:

`npm run build` creates a static directory

`npm run dev` allows markdown (not C++) to be edited with the dev server
