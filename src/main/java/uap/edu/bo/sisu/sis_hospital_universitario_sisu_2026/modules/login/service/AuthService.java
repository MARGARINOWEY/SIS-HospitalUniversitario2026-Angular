package uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.login.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.config.JwtUtil;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.login.dto.AuthResponse;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.login.dto.LoginRequest;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.z_entitys.services.CustomUserDetailsService;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;

    public AuthResponse login(LoginRequest request) {
        // Autentica las credenciales con el manager configurado
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );
        
        // Si la autenticación es exitosa, generamos el token
        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        String token = jwtUtil.generateToken(userDetails);
        
        return AuthResponse.builder()
                .token(token)
                .build();
    }
}