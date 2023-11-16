package br.com.tcc.stochos.model;

public enum UserRole {
  ADMIN("admin"),
    USER("user");

      private String role;
   UserRole(String role){
    this.role = role;
  }

  public String getRole(){
     return role;
  }
}
