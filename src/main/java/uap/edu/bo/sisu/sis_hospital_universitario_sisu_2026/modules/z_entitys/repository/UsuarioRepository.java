package uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.z_entitys.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.z_entitys.Usuario;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByNombreUsuario(String nombreUsuario);
}