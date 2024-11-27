package uk.satyampi.BlogMs.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import uk.satyampi.BlogMs.enums.BlogType;

import java.time.LocalDateTime;

@Entity
@Table(name = "Blog_Post")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class BlogPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Blog_Id")
    private Long blogId;

    @Column(name = "Blog_Type", nullable = false)
    @Enumerated(EnumType.STRING)
    private BlogType blogType;

    @Column(name = "Title", nullable = false)
    private String title;

    @Column(name = "Slug", nullable = false, unique = true)
    private String slug;

    @Column(name = "Date_Created", nullable = false)
    private LocalDateTime dateCreated = LocalDateTime.now();

    @Column(name = "Date_Updated")
    private LocalDateTime dateUpdated = LocalDateTime.now();

    @Column(name = "Published_Status", nullable = false)
    private boolean publishedStatus;

    @Column(name = "Author_Id", nullable = false)
    private Long authorId;

    @OneToOne(mappedBy = "blogPost", cascade = CascadeType.ALL, orphanRemoval = true)
    private BlogContent blogContent;

    // Getters and Setters
}
