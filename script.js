
let sourceData = [
    {
      id: "1",
      item_name: "Tom",
      item_cost: "320",
      image: "./images/img3.jpeg",
    },
    {
      id: "2",
      item_name: "jerry",
      item_cost: "1707",
      image: "./images/img4.jpeg",
    },
    {
      id: "3",
      item_name: "micky",
      item_cost: "860",
      image: "./images/img5.jpeg",
    },
    {
      id: "4",
      item_name: "mouse",
      item_cost: "433",
      image: "./images/img6.jpeg",
    },
    {
      id: "5",
      item_name: "popeys",
      item_cost: "1627",
      image: "./images/img7.jpeg",
    },
    {
      id: "6",
      item_name: "oink",
      item_cost: "3720",
      image:"./images/img8.jpeg",
    },
    {
      id: "7",
      item_name: "panther ",
      item_cost: "1375",
      image:"./images/img9.jpeg",
    },
    {
      id: "8",
      item_name: "donald",
      item_cost: "3279",
      image:"./images/img10.jpeg",
    },
    {
      id: "9",
      item_name: "duck",
      item_cost: "2055",
      image:"./images/img11.jpeg",
    },
    {
      id: "10",
      item_name: "scooby-doo",
      item_cost: "1036",
      image:"./images/img12.jpeg",
    },
    {
      id: "11",
      item_name: "larry",
      item_cost: "9052",
      image: "./images/img13.jpeg",
    },
    {
      id: "12",
      item_name: "angelica",
      item_cost: "3420",
      image: "./images/img14.jpeg",
    },
    {
      id: "13",
      item_name: "space ghost",
      item_cost: "4706",
      image: "./images/img15.jpeg",
    },
    {
      id: "14",
      item_name: "barvo",
      item_cost: "3135",
      image: "./images/img16.jpeg",
    },
    {
      id: "15",
      item_name: "LTatyana Fitzpatrick",
      item_cost: "3857",
      image: "./images/img17.jpeg",
    },
    {
      id: "16",
      item_name: "LMichael Silva",
      item_cost: "1985",
      image: "./images/img18.jpeg",
    },
    {
      id: "17",
      item_name: "MPaul Byrd",
      item_cost: "725000",
      image: "./images/img19.jpg",
    },
    {
      id: "18",
      item_name: "NGloria Little",
      item_cost: "2375",
      image: "./images/img20.jpeg",
    },
    {
      id: "19",
      item_name: "OBradley Greer",
      item_cost: "1320",
      image: "./images/img21.jpeg",
    },
    {
      id: "20",
      item_name: "PDai Rios",
      item_cost: "217500",
      image: "./images/img22.jpeg",
    },
    {
      id: "21",
      item_name: "PJenette Caldwell",
      item_cost: "3450",
      image:"./images/img23.jpeg",
    },
    {
      id: "22",
      item_name: "QYuri Berry",
      item_cost: "6750",
      image: "./images/img24.jpeg",
    },
    {
      id: "23",
      item_name: "RCaesar Vance",
      item_cost: "1064",
      image:"./images/img25.jpeg",
    },
    {
      id: "24",
      item_name: "SDoris Wilder",
      item_cost: "85600",
      image: "./images/img26.png",
    },
    {
      id: "25",
      item_name: "SDoris Wilder",
      item_cost: "85600",
      image: "./images/img27.jpeg",
    },
    {
      id: "26",
      item_name: "SDoris Wilder",
      item_cost: "85600",
      image: "./images/img28.jpeg",
    },
    {
      id: "27",
      item_name: "YDoris Wilder",
      item_cost: "85600",
      image: "./images/img29.jpeg",
    },
    {
      id: "28",
      item_name: "tDoris Wilder",
      item_cost: "85600",
      image: "./images/img30.jpeg",
    },
    {
      id: "29",
      item_name: "zDoris Wilder",
      item_cost: "85600",
      image: "./images/img35.jpeg",
    },
    {
      id: "30",
      item_name: "zDoris Wilder",
      item_cost: "85600",
      image: "./images/img34.jpeg",
    },
    {
      id: "31",
      item_name: "zDoris Wilder",
      item_cost: "85600",
      image: "./images/img33.jpeg",
    },
    {
      id: "32",
      item_name: "zDoris Wilder",
      item_cost: "85600",
      image: "./images/img31.jpeg",
    },
    {
      id: "33",
      item_name: "zDoris Wilder",
      item_cost: "85600",
      image: "./images/img32.jpeg",
    },
  ];
  
  function loadImages() {
    return {
      search: "",
      pageNumber: 0,
      size: 9,     //per page 
      total: "",
      myForData: sourceData,
  
      get filteredItems() {
        const start = this.pageNumber * this.size,
          end = start + this.size;
  
        if (this.search === "") {
          this.total = this.myForData.length;
          return this.myForData.slice(start, end);
        }
  
        //Return the total results of the filters 
        this.total = this.myForData.filter((item) => {
          return item.item_name.toLowerCase().includes(this.search.toLowerCase());
        }).length;
  
        //Return the filtered data
        return this.myForData.filter((item) => {
            return item.item_name.toLowerCase().includes(this.search.toLowerCase());
          })
          .slice(start, end);
      },
  
      //Create array of all pages (for loop to display page numbers)
      pages() {
        return Array.from({
          length: Math.ceil(this.total / this.size),
        });
      },
  
      //Next Page
      nextPage() {
        this.pageNumber++;
      },
  
      //Previous Page
      prevPage() {
        this.pageNumber--;
      },
  
      //Total number of pages
      pageCount() {
        return Math.ceil(this.total / this.size);
      },
 
      //Link to navigate to page
      viewPage(index) {
        this.pageNumber = index;
      },
    };
  }
  