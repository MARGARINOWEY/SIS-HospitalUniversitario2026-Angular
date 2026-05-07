package uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.modules.z_entitys;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import uap.edu.bo.sisu.sis_hospital_universitario_sisu_2026.config.AuditoriaConfig;

@Entity
@Table(name = "usuario")
@Setter
@Getter
public class Usuario extends AuditoriaConfig{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_usuario;

    private String nombre_usuario;
    private String contrasena_usuario;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "persona")
    private Persona persona;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "rol")
    private Rol rol;
    
}