export const STYLE = {
    computed: {
        style () {
            let brand = this.data.design;
            return {
                background: `linear-gradient(-45deg, ${brand.secondaryColour}, ${brand.primaryColour}, ${brand.secondaryColour}, ${brand.primaryColour})`,
                fontFamily: brand.font
    
            }
        }
    }
    
}