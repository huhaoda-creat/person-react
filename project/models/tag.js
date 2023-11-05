const { DataTypes, Model } = require("sequelize");
const sequelize  = require("../config/db.config")
class Tag extends Model {}

Tag.init(
  {
    tagName: {
      comment: "标签名称",
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isDeleted: {
      comment: "是否已经删除",
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Tag",
  }
);


module.exports = Tag;
