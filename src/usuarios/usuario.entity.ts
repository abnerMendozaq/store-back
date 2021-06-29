import { AllowNull, AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({ tableName: 'usuarios' })
export class Usuario extends Model {
    @Column
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    idUsuario: number;
}