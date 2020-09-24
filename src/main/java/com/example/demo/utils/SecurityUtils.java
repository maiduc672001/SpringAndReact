package com.example.demo.utils;

import com.example.demo.security.UserPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityUtils {
    public static UserPrincipal getPrincipal() {
        UserPrincipal user = (UserPrincipal) (SecurityContextHolder.getContext()).getAuthentication().getPrincipal();
        return user;
    }
}
