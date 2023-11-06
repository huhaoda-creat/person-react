const Tag = require("../models/tag");


async function createTag(req, res) {
    try {
      const { name } = req.body;
      const oldTag = await Tag.findOne({
        where: {
          name,
        }
      });
  
      // 之前创建过这个标签
      if (oldTag) {
        // 标签没删除
        if (!oldTag.isDeleted) {
          return res.json({ msg: "标签已存在" });
        }
  
        // 标签如果已经删除了则直接将其恢复并更新创建时间
        oldTag.isDeleted = false;
        const newDate =  new Date();
        oldTag.createdAt =new Date();
        oldTag.updatedAt = new Date();
  
        await oldTag.save();
        return res.json(oldTag);
      }
  
      // 之前没创建过则直接创建
      const newTag = await Tag.create({ name });
      res.json(newTag);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  async function getTags(req, res) {
    console.log(req,res);
    try {
      const tags = await Tag.findAll({
        where: { isDeleted: false },
        // 从返回结果中移除 isDeleted 字段
        attributes: { exclude: ["isDeleted"] },
      });
      const data ={
        tags: tags
      }
      res.json({data: data});
    } catch (error) {
        // console.log(error);
      res.status(500).json({ error: error.message });
    }
  } 

module.exports = {
    createTag,
    getTags
  }