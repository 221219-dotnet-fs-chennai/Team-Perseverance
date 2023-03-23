using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PatientFluentApi.Entities;

public partial class PhysicianAvailabilityServiceDbContext : DbContext
{
    public PhysicianAvailabilityServiceDbContext()
    {
    }

    public PhysicianAvailabilityServiceDbContext(DbContextOptions<PhysicianAvailabilityServiceDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<PatientLogin> PatientLogins { get; set; }

    // "Server=tcp:physicianavailabilityservice.database.windows.net,1433;Initial Catalog=PhysicianAvailabilityServiceDb;Persist Security Info=False;User ID=Srinu;Password=Password123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;"

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<PatientLogin>(entity =>
        {
            entity.HasKey(e => e.LoginId).HasName("PK__patient___1F5EF4CFD3C0989D");

            entity.ToTable("patient_login");

            entity.Property(e => e.LoginId)
                .HasMaxLength(38)
                .IsUnicode(false)
                .HasColumnName("loginId");
            entity.Property(e => e.Email)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Password)
                .HasMaxLength(25)
                .IsUnicode(false)
                .HasColumnName("password");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
