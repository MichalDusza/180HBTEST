class Config {
  getCmsInfo(): any {
    return {
      info_1: {
        title: "Lorem ipsum dolor sit amet dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tellus vitae ipsum cursus venenatis. Etiam condimentum est urna, et faucibus augue dapibus eu. ",
        imageSmall: "src/assets/images/building1.jpg",
        imageBig: "src/assets/images/building2.jpg",
      },
      info_2: {
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tellus vitae ipsum cursus venenatis. Etiam condimentum est urna, et faucibus augue dapibus eu. Nunc fringilla, urna at commodo fringilla, erat tellus pharetra metus, sit amet vehicula ligula ex sed sem.",
        imageSmall: "src/assets/images/building1.jpg",
        imageBig: "src/assets/images/building2.jpg",
      },
      info_3: {
        headerText: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        descriptionText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tellus vitae ipsum cursus venenatis. Etiam condimentum est urna, et faucibus augue dapibus eu. ",
        buttonText: "See more",
        buttonLink: "#",
        mainImgUrl: "src/assets/images/garden.jpg",
        infoimages: [
          {
            imgUrl: "src/assets/images/texture.jpg",
            imgLabel: "22-06 | Brilliant",
          },
          {
            imgUrl: "src/assets/images/texture.jpg",
            imgLabel: "22-06 | Brilliant",
          },
        ],
        backgroundGradient:
          "linear-gradient(90deg, rgba(241,247,239,1) 70%, rgba(255,255,255,0.20351890756302526) 100%)",
      },
      info_4: {
        headerText: "Lorem ipsum ",
        descriptionTextTitle: "Lorem ipsum dolor",
        descriptionText:
          "Lorem ipsum dolor </br> sit amet, consectetur </br> adipiscing elit. Vivamus </br> vitae tellus vitae ipsum cursus venenatis. </br> Etiam condimentum est urna, </br> et faucibus augue dapibus eu. ",
        descriptionTextOpeningHoursTitle: "Lorem ipsum dolor",
        descriptionTextOpeningHours: [
          "lorem ipsum lorem ",
          "12-14/15-18",
          "lorem ipsum",
          "12-14",
          "lorem ipsum",
          "12-14",
          "lorem ipsum",
          "closed",
        ],
        buttonText: "See more",
        buttonLink: "#",
        buttonColor: "black",
        buttonBackgroundColorRgb: "52, 235, 217",
        mainImgUrl: "src/assets/images/office.jpg",
        backgroundGradient:
          "linear-gradient(90deg, rgba(241,247,239,1) 50%, rgba(255,255,255,0.20351890756302526) 100%)",
      },
      info_5: {
        headerText: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        descriptionText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tellus vitae ipsum cursus venenatis. Etiam condimentum est urna, et faucibus augue dapibus eu. ",
        buttonText: "See more",
        buttonLink: "#",
        upperImgUrl: "src/assets/images/garden.jpg",
        lowerImgUrl: "src/assets/images/texture.jpg",
      },
      info_6: {
        headerText: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        descriptionText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae tellus vitae ipsum cursus venenatis. Etiam condimentum est urna, et faucibus augue dapibus eu. ",
        buttonText: "Contact with us!",
        buttonLink: "#",
        personImgUrl: "src/assets/images/people.jpg",
        buttonColor: "white",
        buttonBackgroundColorRgb: "0, 0, 0",
        backgroundGradient:
          "linear-gradient(100deg, rgba(198,221,220,1) 60%, rgba(255,255,255,0.20351890756302526) 100%)",
      },
    };
  }
}

export default new Config();
