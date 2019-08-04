using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class RUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StoreName",
                table: "RUser",
                newName: "storeName");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "RUser",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "RUser",
                newName: "lastName");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "RUser",
                newName: "firstName");

            migrationBuilder.RenameColumn(
                name: "EmailAddress",
                table: "RUser",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "CPassword",
                table: "RUser",
                newName: "confirmPassword");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "storeName",
                table: "RUser",
                newName: "StoreName");

            migrationBuilder.RenameColumn(
                name: "password",
                table: "RUser",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "lastName",
                table: "RUser",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "firstName",
                table: "RUser",
                newName: "FirstName");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "RUser",
                newName: "EmailAddress");

            migrationBuilder.RenameColumn(
                name: "confirmPassword",
                table: "RUser",
                newName: "CPassword");
        }
    }
}
