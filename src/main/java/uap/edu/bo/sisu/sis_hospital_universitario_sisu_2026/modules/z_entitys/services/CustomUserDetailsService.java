package uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.z_entitys.services;

import lombok.RequiredArgsConstructor;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.z_entitys.Usuario;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.z_entitys.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 1. Buscamos el usuario por el campo nombre_usuario
        Usuario usuario = usuarioRepository.findByNombreUsuario(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado en el sistema"));

        // 2. Extraemos el rol (Asumiendo que tu entidad Rol tiene un campo 'nombre')
        // Si aún no tienes la clase Rol implementada, puedes dejar esto como una lista vacía por ahora.
        String nombreRol = usuario.getRol() != null ? usuario.getRol().getNombre_rol() : "ROLE_USER";

        // 3. Devolvemos un objeto UserDetails que Spring Security entiende
        return new User(
                usuario.getNombreUsuario(),
                usuario.getContrasenaUsuario(),
                Collections.singletonList(new SimpleGrantedAuthority(nombreRol))
        );
    }
}