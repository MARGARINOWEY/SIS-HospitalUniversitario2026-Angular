package uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.login.controller;

import lombok.RequiredArgsConstructor;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.login.dto.AuthResponse;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.login.dto.LoginRequest;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.login.service.AuthService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}