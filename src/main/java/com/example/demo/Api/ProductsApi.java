package com.example.demo.Api;
import com.example.demo.DTO.CartCommodityDTO;
import com.example.demo.DTO.CategoryDTO;
import com.example.demo.DTO.CommodityDTO;
import com.example.demo.DTO.UserDTO;
import com.example.demo.Service.*;
import com.example.demo.security.UserPrincipal;
import com.example.demo.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
public class ProductsApi {
    @Autowired
    private CommodityService commodityService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private UserService userService;
    @Autowired
    private CartCommodityService cartCommodityService;
    @GetMapping("/sales")
    public List<CommodityDTO> getCommoditySale(){
        List<CommodityDTO> commodityDTOS=commodityService.getCommoditySale();
        return commodityDTOS;
    }
    @GetMapping("/products/{categoryid}")
    public List<CommodityDTO> getCommodity(@PathVariable(value = "categoryid",required = false) long categoryid){
        List<CommodityDTO> commodityDTOS=commodityService.getCommodity(categoryid);
        return commodityDTOS;
    }
    @PostMapping("/cart")
    public  String addToCart(@RequestBody CommodityDTO commodityDTO){
        try {
            UserPrincipal user= SecurityUtils.getPrincipal();
            UserDTO userDTO=userService.getByUsername(user.getUsername());
            cartCommodityService.addCommodity(commodityDTO.getCommodityid(),userDTO);
            return "Thêm thành công";
        }catch (Exception e){
            throw e;
        }
    }
@GetMapping("/cart")
public List<CartCommodityDTO> getCart(){
        UserPrincipal user=SecurityUtils.getPrincipal();
        UserDTO userDTO=userService.getByUsername(user.getUsername());
        List<CartCommodityDTO> cartCommodityDTOS=cartCommodityService.getCart(userDTO);
        return cartCommodityDTOS;
}
@PutMapping("/cart")
public  String updateCart(@RequestBody List<CartCommodityDTO> cartCommodityDTOS){
    UserPrincipal user=SecurityUtils.getPrincipal();
    UserDTO userDTO=userService.getByUsername(user.getUsername());
        cartCommodityService.updateCart(cartCommodityDTOS,userDTO);
        return "success";
}
@DeleteMapping("/cart/{cartcommodityid}")
public List<CartCommodityDTO> deleteCart(@PathVariable Long cartcommodityid){
    UserPrincipal user=SecurityUtils.getPrincipal();
    UserDTO userDTO=userService.getByUsername(user.getUsername());
    cartCommodityService.deleteProductCart(cartcommodityid);
    List<CartCommodityDTO> cartCommodityDTOS=cartCommodityService.getCart(userDTO);
    return cartCommodityDTOS;
}
@PutMapping("/cart/delete")
public String deleteCart(@RequestBody List<CartCommodityDTO> cartCommodityDTOS){
    UserPrincipal user=SecurityUtils.getPrincipal();
    UserDTO userDTO=userService.getByUsername(user.getUsername());
        cartCommodityService.deleteCart(cartCommodityDTOS,userDTO);
        return "success";
}
    @GetMapping("/category")
    public List<CategoryDTO> getCategory(){
            List<CategoryDTO> categoryDTOS=categoryService.getCategory();
        return categoryDTOS;
    }
    @GetMapping("/details/{commodityid}")
    public CommodityDTO getDetailProduct(@PathVariable(value = "commodityid") long commodityid){
CommodityDTO commodityDTO=commodityService.getDetailProduct(commodityid);
return commodityDTO;
    }
    @GetMapping("/abc")
    public String hello(){
        return "Anh Đức";
    }
@RequestMapping(value = "/product",method = RequestMethod.POST)
    public @ResponseBody List<CartCommodityDTO> productsAfterAdd( CommodityDTO commodityDTO) throws IOException {
        MultipartFile multipartFile=commodityDTO.getFile();
    String fileName = multipartFile.getOriginalFilename();
    CategoryDTO categoryDTO=categoryService.findOne(commodityDTO.getCategoryid());
    commodityDTO.setCategoryDTO(categoryDTO);
    if(fileName!=null) {
        fileName = commodityDTO.getCategoryDTO().getName() + "/" + fileName;
        commodityDTO.setImage(fileName);
        File file = new File("C:/Users/ADMIN/OneDrive/Desktop/Ecommerce/ecommerce/public/images", fileName);
        multipartFile.transferTo(file);
    }
    UserPrincipal user=SecurityUtils.getPrincipal();
    UserDTO userDTO=userService.getByUsername(user.getUsername());
    commodityService.saveProduct(commodityDTO);
        List<CartCommodityDTO> cartCommodityDTOS=cartCommodityService.getCart(userDTO);
        return cartCommodityDTOS;
}
@RequestMapping(value = "/product",method = RequestMethod.PUT)
    public String updateProduct(CommodityDTO commodityDTO)throws IOException{
        CommodityDTO commodityDTO1=commodityService.getDetailProduct(commodityDTO.getCommodityid());
        MultipartFile multipartFile=commodityDTO.getFile();
    String fileName = multipartFile.getOriginalFilename();
    CategoryDTO categoryDTO=categoryService.findOne(commodityDTO.getCategoryid());
    commodityDTO.setCategoryDTO(categoryDTO);
    if(fileName!=null) {
        fileName = commodityDTO.getCategoryDTO().getName() + "/" + fileName;
        if(!fileName.equals(commodityDTO1.getImage())) {
            commodityDTO.setImage(fileName);
            File file = new File("C:/Users/ADMIN/OneDrive/Desktop/Ecommerce/ecommerce/public/images", fileName);
            multipartFile.transferTo(file);
        }
    }
    UserPrincipal user=SecurityUtils.getPrincipal();
    UserDTO userDTO=userService.getByUsername(user.getUsername());
    commodityService.saveProduct(commodityDTO);
    return "success";
}
}
