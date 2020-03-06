import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer N_u9Mzmcqu3_SLoS7wjnt__49Byy34nD4Mg80TiGcZQTexUknkJ0shfhU3BCGlDjWq0x9r7yhhx-xtAwZqR3cyikyrfG7FPlW_CQE2Eh43edyeP3czWE-hF4ek5hXnYx"
  }
});
